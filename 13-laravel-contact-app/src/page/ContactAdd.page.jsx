import React, { useEffect, useState } from "react";
import { ButtonComponents, FormComponents } from "../components";
import {
  addNewContact,
  editContact,
  getSingleContact,
} from "../service/contact.service";
import { useNavigate, useLocation } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleFormDataChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res;
    if (location.state?.edit) {
      res = await editContact(location.state.data.id, formData);
    } else {
      res = await addNewContact(formData);
    }

    if (res) {
      nav("/home");
    }
  };

  useEffect(() => {
    if (location.state?.edit) {
      const { name, phone, email, address } = location.state.data;
      setFormData({ name, phone, email, address });
    }
  }, [location]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="Center">
        <div className="w-3/5 h-auto shadow px-6 py-7 border rounded">
          <h1 className="font-serif text-xl text-center mb-10">
            Create Your Contact
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormComponents
              value={formData.name}
              onChange={handleFormDataChange}
              type={"text"}
              name={"name"}
              label={"Name"}
            />
            <FormComponents
              value={formData.phone}
              onChange={handleFormDataChange}
              type={"text"}
              name={"phone"}
              label={"Phone"}
            />
            <FormComponents
              value={formData.email}
              onChange={handleFormDataChange}
              type={"text"}
              name={"email"}
              label={"Email"}
            />
            <FormComponents
              value={formData.address}
              onChange={handleFormDataChange}
              type={"text"}
              name={"address"}
              label={"Address"}
            />
            <ButtonComponents type="submit">
              {location.state?.edit ? "Edit Contact" : "Create Contact"}
            </ButtonComponents>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactAddPage;
