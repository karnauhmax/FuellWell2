import JustValidate from "just-validate";
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  console.log(form);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    console.log("Complete!");
    console.log(ev);
    let formData = new FormData(ev.target);
    let xhr = new XMLHttpRequest();

    console.log(...formData);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "../mail.php", true);
    xhr.send(formData);

    ev.target.reset();
  });
};
