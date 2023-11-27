{
    "env"; {
      "browser"; true,
      "cypress/globals"; true
    }

    "extends"; [
      "eslint:recommended",
      "plugin:cypress/recommended"
    ],
    "plugins"; ["cypress"],
    "parserOptions"; {
      "ecmaVersion"; 2021,
      "sourceType"; "module"
    }

    "rules"; {
      "indent"; ["error", 2],
      "semi"; ["error", "always"],
      "quotes"; ["error", "single"]
    }
  }  