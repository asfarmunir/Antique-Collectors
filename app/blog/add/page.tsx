"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  category: string;
  title: string;
  subtitle: string;
  headerImage: File | null;
  sections: Section[];
}

interface Section {
  header: string;
  paragraph: string;
  image: File | null;
}

interface FormErrors {
  category?: string;
  title?: string;
  subtitle?: string;
}

const page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
    title: "",
    subtitle: "",
    headerImage: null,
    sections: [
      {
        header: "",
        paragraph: "",
        image: null,
      },
    ],
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSectionChange = (
    index: number,
    field: keyof Section,
    value: string | File | null
  ) => {
    const updatedSections = [...formData.sections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleImageUpload = (
    e: ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (index === undefined) {
        setFormData({
          ...formData,
          headerImage: e.target.files[0],
        });
      } else {
        handleSectionChange(index, "image", e.target.files[0]);
      }
    }
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        { header: "", paragraph: "", image: null },
      ],
    });
  };

  const validateForm = (): boolean => {
    let hasErrors = false;
    const tempErrors: FormErrors = {};

    if (!formData.category) {
      tempErrors.category = "Category is required.";
      hasErrors = true;
    }

    if (!formData.title) {
      tempErrors.title = "Title is required.";
      hasErrors = true;
    }

    if (formData.subtitle.length > 300) {
      tempErrors.subtitle = "Subtitle cannot exceed 300 characters.";
      hasErrors = true;
    }

    setErrors(tempErrors);
    return !hasErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", formData);

      setFormData({
        category: "",
        title: "",
        subtitle: "",
        headerImage: null,
        sections: [{ header: "", paragraph: "", image: null }],
      });

      alert("Blog post submitted successfully!");
    }
  };

  return (
    <div className="px-5 md:px-12">
      <div className="py-6 xl:py-[32px] border-b border-[#EBE9E0] pb-5 mb-9">
        <h1 className="text-xs text-[#919089]">
          Home / Blog / Blog Post Title{" "}
        </h1>
        <h1 className="font-playfair pt-4 uppercase text-[24px] ">
          write a blog post
        </h1>
      </div>
      <div className=" w-full py-8 flex items-start gap-12">
        <div className="max-w-xl mx-auto p-6 md:p-8 flex-grow bg-primary-50 shadow ">
          <form onSubmit={handleSubmit} className="space-y-5 ">
            {/* Category Field */}
            <div>
              <label className="block text-xs 2xl:text-sm font-medium text-[#0D0106] uppercase mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full border-[#EBE9E0]   shadow-sm p-2 text-xs 2xl:text-sm "
              >
                <option value="">-Select-</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            {/* Title Field */}
            <div>
              <label className="block text-xs 2xl:text-sm font-medium text-[#0D0106] uppercase mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title for your Blog post"
                className="w-full border-[#EBE9E0]  shadow-sm p-2 text-xs 2xl:text-sm "
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Subtitle Field */}
            <div>
              <label className="block text-xs 2xl:text-sm font-medium text-[#0D0106] uppercase mb-2">
                Subtitle
              </label>
              <textarea
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                placeholder="Subtitle"
                maxLength={300}
                className="w-full border-[#EBE9E0]  shadow-sm p-2 text-xs 2xl:text-sm  h-28"
              />
              <p className="text-gray-500 text-sm text-right">
                {formData.subtitle.length} / 300
              </p>
            </div>

            {/* Header Image Upload */}
            <div>
              <label className="block text-xs 2xl:text-sm font-medium text-[#0D0106] uppercase mb-2">
                Upload a Header Image
              </label>
              {/* <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            /> */}
              <div className=" w-full bg-white flex items-center justify-center h-28">
                <p className="text-brown-200 text-xs uppercase">
                  Upload image here
                </p>
              </div>
              {formData.headerImage && (
                <p className="text-gray-700 text-sm mt-2">
                  {formData.headerImage.name}
                </p>
              )}
            </div>

            {formData.sections.map((section, index) => (
              <div key={index} className="border-t pt-4 space-y-5">
                <h3 className="text-xl font-playfair uppercase ">
                  Section {index + 1}
                </h3>
                <div>
                  <label className="block text-xs 2xl:text-sm font-medium text-[#0D0106] uppercase mb-2">
                    Header
                  </label>
                  <input
                    type="text"
                    value={section.header}
                    onChange={(e) =>
                      handleSectionChange(index, "header", e.target.value)
                    }
                    className="w-full border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-xs 2xl:text-sm font-medium text-[#0D0106] uppercase mb-2">
                    Paragraph
                  </label>
                  <textarea
                    value={section.paragraph}
                    onChange={(e) =>
                      handleSectionChange(index, "paragraph", e.target.value)
                    }
                    className="w-full border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-xs 2xl:text-sm font-medium text-[#0D0106] uppercase mb-2">
                    Image
                  </label>
                  {/* <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, index)}
                  className="w-full text-sm text-gray-500"
                /> */}
                  <div className=" w-full bg-white flex items-center justify-center h-28">
                    <p className="text-brown-200 text-xs uppercase">
                      Upload image here
                    </p>
                  </div>
                  {section.image && (
                    <p className="text-sm text-gray-700">
                      {section.image.name}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addSection}
              className="border font-semibold border-[#0D0106] text-[#0D0106] px-4 py-3 mt-4 text-xs uppercase"
            >
              + Add Another Section
            </button>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0D0106] text-white py-3
             px-4 text-xs 2xl:text-sm uppercase font-thin  shadow-sm  focus:ring-2  focus:ring-offset-2"
            >
              PUBLISH blog post
            </button>
          </form>
        </div>
        <div className=" space-y-5  flex-grow">
          <h2 className=" font-playfair  uppercase">Preview</h2>
          <div className=" w-full  bg-primary-50 p-28"></div>
          <h2 className="text-2xl font-playfair">Blog Title</h2>
          <span className="text-xs text-[#666666] ">18 Jan 2022</span>
          <p className=" max-w-lg text-sm text-[#666666]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quaerat neque nemo iure eos officiis sit
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
