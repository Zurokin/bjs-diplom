"use strict";

// Создание объекта UserForm
const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(
    { login: data.login, password: data.password },
    (response) => {
      console.log(response);

      if (response.success) {
        location.reload();
      } else {
        alert(`Ошибка авторизации: ${response.error}`);
      }
    }
  );
};

// Логика для регистрации
userForm.registerFormCallback = (data) => {
  ApiConnector.register(
    { login: data.login, password: data.password },
    (response) => {
      console.log(response);
      if (response.success) {
        location.reload();
      } else {
        alert(`Ошибка регистрации: ${response.error}`);
      }
    }
  );
};
