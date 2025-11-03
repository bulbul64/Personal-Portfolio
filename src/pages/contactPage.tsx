import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Connect() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <motion.section
      id="connect"
      className="py-16 px-6 sm:px-8 max-w-5xl mx-auto transition-colors duration-300
                 bg-white text-gray-900 dark:bg-[#0A0A0A] dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400">
          #Contact
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          Get in touch with me.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Info */}
        <motion.div
          className="md:w-1/2 p-4 rounded-xl shadow-sm
                     bg-gray-100 dark:bg-[#111]/40
                     text-gray-800 dark:text-gray-300"
        >
          <p>
            ✉️ Email:{' '}
            <a
              href="mailto:robert@gmail.com"
              className="text-amber-600 dark:text-amber-400 underline"
            >
              robert@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{' '}
            <a href="tel:+880123456789" className="text-amber-600 dark:text-amber-400 underline">
              +880 1234 567 89
            </a>
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-1/2 p-4 rounded-xl shadow-sm flex flex-col gap-3
                     bg-gray-100 dark:bg-[#111]/40
                     text-gray-800 dark:text-gray-300"
        >
          <input
            {...register('name', { required: true })}
            placeholder="Name"
            className="p-2 rounded-lg border text-sm outline-none
                       border-gray-300 dark:border-gray-700
                       bg-white dark:bg-[#0A0A0A]/50
                       text-gray-900 dark:text-gray-100"
          />
          <input
            {...register('email', { required: true })}
            placeholder="Email"
            className="p-2 rounded-lg border text-sm outline-none
                       border-gray-300 dark:border-gray-700
                       bg-white dark:bg-[#0A0A0A]/50
                       text-gray-900 dark:text-gray-100"
          />
          <textarea
            {...register('message', { required: true })}
            placeholder="Message"
            rows={3}
            className="p-2 rounded-lg border text-sm outline-none
                       border-gray-300 dark:border-gray-700
                       bg-white dark:bg-[#0A0A0A]/50
                       text-gray-900 dark:text-gray-100"
          />
          <button
            type="submit"
            className="bg-amber-500 dark:bg-amber-400
                       hover:bg-amber-600 dark:hover:bg-amber-500
                       text-black font-medium rounded-lg py-2 mt-1 text-sm transition-all"
          >
            Send
          </button>

          {submitted && (
            <p className="text-green-500 dark:text-green-400 text-sm text-center mt-1">
              ✅ Message sent!
            </p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
