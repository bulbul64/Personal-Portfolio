import { useForm } from "react-hook-form";

export default function Connect() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <section
      id="connect"
      className="border-t p-10 flex flex-col md:flex-row gap-10 bg-[#0A0A0A]"
    >
      {/* Left Info Column */}
      <div className="md:w-1/2">
        <h4 className="text-5xl font-bold mb-3 text-amber-400">
          LET&apos;S CONNECT
        </h4>
        <div className="w-20 h-1 bg-amber-400 rounded mb-6"></div>{" "}
        {/* subtle line */}
        <p className="text-gray-300 mb-2">
          Say hello at{" "}
          <span className="underline text-[#D3E97A]">
            robertgarcia@gmail.com
          </span>
        </p>
        <p className="text-gray-300">
          For more info, here’s my{" "}
          <span className="underline text-[#D3E97A]">resume</span>
        </p>
      </div>

      {/* Right Form Column */}
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 font-medium">Your Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-[#D3E97A] transition"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-[#D3E97A] transition"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            {...register("message", { required: "Message required" })}
            rows="5"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:ring-2 focus:ring-[#D3E97A] transition"
            placeholder="Write your message"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#D3E97A] text-black rounded-lg font-semibold hover:bg-amber-400 hover:scale-105 transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
