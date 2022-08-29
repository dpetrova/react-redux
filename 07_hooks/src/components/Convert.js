import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  //debounce user input text
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  // call Google translate API when debounced text ot language are changed
  useEffect(() => {
    const translate = async () => {
      //arguments: 1->url, 2->body, 3->query params
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    translate();
  }, [language, debouncedText]);

  return (
    <div>
      <h2 className="ui header">{translated}</h2>
    </div>
  );
};

export default Convert;
