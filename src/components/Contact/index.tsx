import React, { LegacyRef, useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

import styles from "./Contact.module.scss";
import { ThemeContext } from "../../contexts/themeContext";

const Contact = () => {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        "service_x5jo0r9",
        "template_usmz7kt",
        formRef.current,
        "user_OYdVfUti4bwF9O9Uxaxoj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBg}></div>
      <div className={styles.contactWrapper}>
        <div className={styles.contactLeft}>
          <h1 className={styles.contactTitle}>Let's discuss your project</h1>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <img
                src="/images/phone.png"
                alt=""
                className={styles.contactIcon}
              />
              (44) 98843-0909
            </div>
            <div className={styles.contactInfoItem}>
              <img
                src="/images/email.png"
                alt=""
                className={styles.contactIcon}
              />
              contact@apjinfo.com
            </div>
            <div className={styles.contactInfoItem}>
              <img
                src="/images/address.png"
                alt=""
                className={styles.contactIcon}
              />
              Rua Mandaguari, 32, Maringá - PR
            </div>
          </div>
        </div>
        <div className={styles.contactRight}>
          <p className={styles.contactDescription}>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode ? "#333" : "" }}
              type="text"
              placeholder="Nome"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" : "" }}
              type="text"
              placeholder="Assunto"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" : "" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode ? "#333" : "" }}
              rows={5}
              placeholder="Mensagem"
              name="message"
            />
            <button>Enviar</button>
            {done && "Thanks"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
