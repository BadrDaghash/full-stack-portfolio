import React from "react";
import { useFormik } from "formik";
import { motion, useInView } from "framer-motion";
import * as Yup from "yup";
import abstract from "./../../assets/contact/abstract.png";
import line from "./../../assets/contact/lines.jpg";
import "./contact.css";
export default function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(01)[0-9]{9}$/,
        "Must be a valid Egyptian phone number (e.g., 01234567890)"
      )
      .required("Phone number is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <motion.div
      className="h- w-full text-2xl text-blue-200 bg-gray-500 flex text-center items-center justify-center 
      bg-cover bg-center relative pt-10 pb-20"
      style={{ backgroundImage: `url(${abstract})` }}
    >
      <div className="w-full h-full bg-[#000000e1] absolute inset-0  "></div>
      <div className="z-20 flex flex-col sm:flex-row w-full  p-6  gap-12">
        <div className="flex flex-col w-full sm:w-1/2 justify-center items-center  sm:mx-8 pb-6 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-indigo-800 mb-4 animate-pulse-soft">
            Let’s Work Together
          </h2>
          <p className="text-white font-body text-base sm:text-2xl w-[80%]">
            Got an idea, feedback, or just want to chat? Drop me a message and
            let’s start a conversation — I’d love to hear from you!
          </p>
        </div>
        <div className='w-full sm:w-1/2'>
          <div className="p-6 rounded shadow-md bg-[#0000009e] w-full max-w-md mx-auto">
            <div class="login-box">
              <form onSubmit={formik.handleSubmit}>
                {/* email */}
                <div class="relative mb-3">
                  <input
                    id="floating_email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1
                     border-indigo-900 
                    appearance-none  focus:outline-none 
                    focus:ring-0 focus:border-gray-200 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_email"
                    class="absolute text-sm text-gray-200  duration-300 transform -translate-y-4 scale-25
                     top-2 z-10 origin-[0]   px-2 peer-focus:px-2 peer-focus:text-grey-200
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                      peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7
                      rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Email
                  </label>
                  <p className="text-xs text-red-400 pt-2">
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </p>
                </div>
                {/* phone number */}
                <div class="relative mb-3">
                  <input
                    id="floating_outlined"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1
                     border-indigo-900 
                    appearance-none  focus:outline-none 
                    focus:ring-0 focus:border-gray-200 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-gray-200  duration-300 transform -translate-y-4 scale-25
                     top-2 z-10 origin-[0]   px-2 peer-focus:px-2 peer-focus:text-grey-200
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                      peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7
                      rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Phone Number{" "}
                  </label>
                  <p className="text-xs text-red-400 pt-2">
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="error">{formik.errors.phone}</div>
                    ) : null}
                  </p>
                </div>
                {/* phone number */}
                <label
                  for="message"
                  class="block mb-2 text-sm text-start font-medium text-gray-200 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-300 bg-transparent rounded-lg border resize-none  shadow-indigo-600
                   border-indigo-900 focus:ring-gray-200 focus:border-indigo-900"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <p className="text-xs text-red-400 pt-2">
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
                </p>
               
                {/* message */}
                <center>
                  <a>
                    <button type="submit">
                      SEND
                      <span></span>
                    </button>
                  </a>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
