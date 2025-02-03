// 'use client';
// import React from "react";
// import * as Yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// // internal
// import ErrorMessage from "@components/error-message/error";

// const schema = Yup.object().shape({
//   name: Yup.string().required().label("Name"),
//   email: Yup.string().required().email().label("Email"),
//   phone: Yup.string().required().min(11).label("Phone"),
//   company: Yup.string().required().label("Company"),
//   message: Yup.string().required().min(20).label("Message"),
//   house: Yup.string().required().label("House"),
//   inquiry: Yup.string().required().label("Inquiry for"),
//   bestTime: Yup.string().required().label("Best Time to Call"),
// });

// const ContactForm = () => {
//   // react hook form
//   const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     resolver: yupResolver(schema)
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };

//   return (
//     <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="contact__input-2">
//             <input
//               name="name"
//               {...register("name", { required: `Name is required!` })}
//               type="text"
//               placeholder="Enter your name"
//               id="name"
//             />
//             <ErrorMessage message={errors.name?.message} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="contact__input-2">
//             <input
//               name="email"
//               {...register("email", { required: `Email is required!` })}
//               type="email"
//               placeholder="Enter your email"
//               id="email"
//             />
//             <ErrorMessage message={errors.email?.message} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="contact__input-2">
//             <input
//               name="phone"
//               {...register("phone", { required: `Phone is required!` })}
//               type="text"
//               placeholder="Mobile no"
//               id="phone"
//             />
//             <ErrorMessage message={errors.phone?.message} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="contact__input-2">
//             <input
//               name="company"
//               {...register("company", { required: `Company is required!` })}
//               type="text"
//               placeholder="Company"
//               id="company"
//             />
//             <ErrorMessage message={errors.company?.message} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="contact__input-2">
//             <select name="house" {...register("house")} id="house">
//               <option value="">Select House Type</option>
//               <option value="Double Storey">Double Storey</option>
//               <option value="Single Storey">Single Storey</option>
//               <option value="Owned">Owned</option>
//               <option value="Rented">Rented</option>
//             </select>
//             <ErrorMessage message={errors.house?.message} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="contact__input-2">
//             <select name="inquiry" {...register("inquiry")} id="inquiry">
//               <option value="">Select Inquiry Type</option>
//               <option value="Air Conditioning">Air Conditioning</option>
//               <option value="Hot Water System">Hot Water System</option>
//             </select>
//             <ErrorMessage message={errors.inquiry?.message} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="contact__input-2">
//             <select name="bestTime" {...register("bestTime")} id="bestTime">
//               <option value="">Select Best Time to Call</option>
//               <option value="9am-11am">9am-11am</option>
//               <option value="11am-1pm">11am-1pm</option>
//               <option value="1pm-3pm">1pm-3pm</option>
//               <option value="3pm-5pm">3pm-5pm</option>
//               <option value="5pm-8pm">5pm-8pm</option>
//             </select>
//             <ErrorMessage message={errors.bestTime?.message} />
//           </div>
//         </div>
//         <div className="col-md-12">
//           <div className="contact__input-2">
//             <textarea
//               name="message"
//               {...register("message", { required: `Message is required!` })}
//               id="message"
//               placeholder="Your message"
//             ></textarea>
//             <ErrorMessage message={errors.message?.message} />
//           </div>
//         </div>
//         <div className="col-md-12">
//           <div className="contact__agree d-flex align-items-start mb-25">
//             <input className="e-check-input" type="checkbox" id="e-agree" />
//             <label className="e-check-label" htmlFor="e-agree">
//               I am bound by the terms of the Service I accept Privacy Policy.
//             </label>
//           </div>
//         </div>
//         <div className="col-md-5">
//           <div className="contact__btn-2">
//             <button type="submit" className="tp-btn">
//               Send Message
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;
'use client';
import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactSelect from "react-select";
// internal
import ErrorMessage from "@components/error-message/error";

// Updated schema with new "ownership" field
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone"),
  company: Yup.string().required().label("Company"),
  message: Yup.string().required().min(20).label("Message"),
  house: Yup.string().required().label("House"),
  ownership: Yup.string().required().label("Ownership"),
  inquiry: Yup.string().required().label("Inquiry for"),
  bestTime: Yup.string().required().label("Best Time to Call"),
});

// Updated options for House Type (removed Owned & Rented)
const houseOptions = [
  { value: "Double Storey", label: "Double Storey" },
  { value: "Single Storey", label: "Single Storey" },
];

// New options for Ownership dropdown
const ownershipOptions = [
  { value: "Owned", label: "Owned" },
  { value: "Rented", label: "Rented" },
];

const inquiryOptions = [
  { value: "Air Conditioning", label: "Air Conditioning" },
  { value: "Hot Water System", label: "Hot Water System" },
];

const bestTimeOptions = [
  { value: "9am-11am", label: "9am-11am" },
  { value: "11am-1pm", label: "11am-1pm" },
  { value: "1pm-3pm", label: "1pm-3pm" },
  { value: "3pm-5pm", label: "3pm-5pm" },
  { value: "5pm-8pm", label: "5pm-8pm" },
];

// Custom styles for ReactSelect with no hover effect and border color var(--tp-grey-15)
const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid var(--tp-grey-15)",
    borderRadius: "4px",
    minHeight: "40px",
    fontSize: "14px",
    backgroundColor: "var(--tp-grey-15)",
    padding: "0 8px",
    boxShadow: "none",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0px 6px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
    padding: "0px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#999",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "40px",
  }),
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Convert the data to URL-encoded format
      const formData = new URLSearchParams();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
  
      const response = await fetch('https://script.google.com/macros/s/AKfycbzbFBRLnRloxgP3zdR_0s4sUSXyRCzW7TeqVWq_Jmatj5iUs_nXLyT8Ux_XqCtU_Csv/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
  
      console.log('Form submitted');
      reset();
      alert('Thank you for your submission!');
  
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };
  

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Name Field */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="name"
              {...register("name", { required: "Name is required!" })}
              type="text"
              placeholder="Enter your name"
              id="name"
            />
            <ErrorMessage message={errors.name?.message} />
          </div>
        </div>

        {/* Email Field */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="email"
              {...register("email", { required: "Email is required!" })}
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
        </div>

        {/* Phone Field */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="phone"
              {...register("phone", { required: "Phone is required!" })}
              type="text"
              placeholder="Mobile no"
              id="phone"
            />
            <ErrorMessage message={errors.phone?.message} />
          </div>
        </div>

        {/* Company Field */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="company"
              {...register("company", { required: "Company is required!" })}
              type="text"
              placeholder="Company"
              id="company"
            />
            <ErrorMessage message={errors.company?.message} />
          </div>
        </div>

        {/* House Type Dropdown */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <Controller
              name="house"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={houseOptions}
                  placeholder="Select House Type"
                  styles={customSelectStyles}
                  onChange={(option) => field.onChange(option.value)}
                  value={
                    houseOptions.find((option) => option.value === field.value) ||
                    null
                  }
                />
              )}
            />
            <ErrorMessage message={errors.house?.message} />
          </div>
        </div>

        {/* Ownership Dropdown */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <Controller
              name="ownership"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={ownershipOptions}
                  placeholder="Select Ownership"
                  styles={customSelectStyles}
                  onChange={(option) => field.onChange(option.value)}
                  value={
                    ownershipOptions.find((option) => option.value === field.value) ||
                    null
                  }
                />
              )}
            />
            <ErrorMessage message={errors.ownership?.message} />
          </div>
        </div>

        {/* Inquiry Dropdown */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <Controller
              name="inquiry"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={inquiryOptions}
                  placeholder="Select Inquiry Type"
                  styles={customSelectStyles}
                  onChange={(option) => field.onChange(option.value)}
                  value={
                    inquiryOptions.find((option) => option.value === field.value) ||
                    null
                  }
                />
              )}
            />
            <ErrorMessage message={errors.inquiry?.message} />
          </div>
        </div>

        {/* Best Time Dropdown */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <Controller
              name="bestTime"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={bestTimeOptions}
                  placeholder="Select Best Time to Call"
                  styles={customSelectStyles}
                  onChange={(option) => field.onChange(option.value)}
                  value={
                    bestTimeOptions.find((option) => option.value === field.value) ||
                    null
                  }
                />
              )}
            />
            <ErrorMessage message={errors.bestTime?.message} />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="col-md-12">
          <div className="contact__input-2">
            <textarea
              name="message"
              {...register("message", { required: "Message is required!" })}
              id="message"
              placeholder="Your message"
            ></textarea>
            <ErrorMessage message={errors.message?.message} />
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="col-md-12">
          <div className="contact__agree d-flex align-items-start mb-25">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">
              I am bound by the terms of the Service I accept Privacy Policy.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-md-5">
          <div className="contact__btn-2">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
