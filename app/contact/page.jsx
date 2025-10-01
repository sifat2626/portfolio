"use client"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import { useState } from "react"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+880 1303 291 451",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ashrafulsifat26@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dhaka, Bangladesh",
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const combinedData = {
      ...formData,
      from_name: `${formData.firstname} ${formData.lastname}`, // Combine firstname and lastname
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        combinedData, // Form data
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID // User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setLoading(false)
          setSuccess(true)
        },
        (err) => {
          console.log("FAILED...", err)
          setLoading(false)
          setError(true)
        }
      )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Let&apos;s work together to create something amazing. I am
                dedicated to delivering high-quality results and ensuring client
                satisfaction. Let&apos;s turn your vision into reality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <Select
                name="service"
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web_design">Web Design</SelectItem>
                    <SelectItem value="web_development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="game_development">
                      Game Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
              {success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-500">
                  Failed to send the message. Please try again.
                </p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white/60">{item.title}</h3>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
