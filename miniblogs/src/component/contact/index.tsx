import axios from "axios";
import Lefthome from "../home/homepage/Lefthome";
import React, { useCallback, useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Home from "../home";

const Index = () => {
  let location = useLocation();
  let history = useHistory();

  const endpoint = useMemo(() => location.pathname || "", [location]);

  useMemo(() => {
    switch (endpoint) {
      case "/home":
        return <Home></Home>;
      default:
        break;
    }
  }, [endpoint]);

  let HandelChangtab = useCallback(
    (endpoint: any) => {
      history.push(`/${endpoint}`);
    },
    [history]
  );



  const [initValueForm, setIniValueForm] = useState<{
    id?: string;
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const handleChangeInput = (inputValue: string, type: string) => {
    console.log(type);
    setIniValueForm((value) => {
      return {
        ...value,
        [type]: inputValue,
      };
    });
  };
  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }
  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    initValueForm.id = guidGenerator();
    console.log(initValueForm);
    axios
      .post("/contacts", initValueForm, {
        headers: {
          apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        alert('Add Contact Succesfully')
        HandelChangtab("home")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row mt-20">
        <div className="col-md-3 home-left">
          <Lefthome></Lefthome>
        </div>

        <div className="col-md-8 contact">
          <h3>Get in touch</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Be sure to use an appropriate type attribute on all inputs (e.g.,
            email for email address or number for numerical information) to take
            advantage of newer input controls like email verification, number
            selection, and more.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              hanldeSubmit(event);
            }}
          >
            <div className="form-group">
              Name
              <input
                type="tex"
                className="form-control"
                id="name"
                placeholder="Enter Name..."
                value={initValueForm.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput(e.target.value, "name")
                }
              />
            </div>
            <div className="form-group">
              Email address
              <input
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={initValueForm.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput(e.target.value, "email")
                }
              />
            </div>

            <div className="form-group">
              Message
              <input
                placeholder="Enter message.."
                className="form-control"
                id="message"
                type="text"
                value={initValueForm.message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput(e.target.value, "message")
                }
              ></input>
            </div>
            <div className="site-button-ghost-wrapper">
              <input type="submit" value="Submit" className="btn btn-secondary " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
