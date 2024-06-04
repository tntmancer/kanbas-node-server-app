export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { operation, a, b } = req.query;
      let result = 0;
      console.log(operation, a, b);
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
            result = parseInt(a) * parseInt(b);
            break;
        case "divide":
            result = parseInt(a) / parseInt(b);
            break;
        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    });
  }
  