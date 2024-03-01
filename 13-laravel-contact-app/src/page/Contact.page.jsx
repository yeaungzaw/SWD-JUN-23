import React, { useEffect, useState } from "react";
import { deleteContact, getContactData } from "../service/contact.service";
import { ContactCardComponents, LoadingComponents } from "../components";
import { useGetContactQuery } from "../store/services/endpoints/contact.endpont";

const ContactPage = () => {
  const { isError, isLoading, data, isSuccess } = useGetContactQuery();

  console.log(isError, isLoading, data, isSuccess);

  const [del, setDel] = useState(false);

  const handleDelete = async (id) => {
    // console.log(id);
    await deleteContact(id);
    setDel(!del);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {isLoading ? (
        <LoadingComponents />
      ) : (
        <>
          {isError ? (
            <h1>{isError.message}</h1>
          ) : (
            data.contacts.data.map((i) => (
              <ContactCardComponents
                key={i.id}
                data={i}
                handleDelete={handleDelete}
              />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
