import React, { useEffect, useState } from "react";
import { deleteContact, getContactData } from "../service/contact.service";
import LoadingComponents from "../components/Loading.components";
import ContactCardComponents from "../components/ContactCard.components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const [del, setDel] = useState(false);

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));

      const res = await getContactData();

      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [del]);

  const handleDelete = async (id) => {
    // console.log(id);
    await deleteContact(id);
    setDel(!del);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            items.data.map((i) => (
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