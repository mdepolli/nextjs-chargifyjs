import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Link from 'next/link';

const ChargifyForm = () => {
  const chargifyForm = useRef();
  const chargify = useRef(new window.Chargify());
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    chargify.current.token(
      chargifyForm.current,

      (token) => {
        console.log('{host} token SUCCESS - token: ', token);
        setToken(token);
      },

      (error) => {
        console.log('{host} token ERROR - err: ', error);
      }
    );
  }

  useEffect(
    () => {
      chargify.current.load({
        publicKey: "chjs_v64mqt85jtf27gkrvjvf3qfb",
        type: "card",
        serverHost: "https://braintree-blue.staging-chargify.com",
        hideCardImage: false,
        optionalLabel: "(optional field)",
        requiredLabel: "*",
        style: {
          "#chargify-form": { border: "1px dashed #ffc0cb57" },
          field: {
            backgroundColor: "orange",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "5px",
          },
          input: {
            backgroundColor: "#e6e6e6",
            paddingTop: "2px",
            paddingBottom: "1px",
            placeholder: { color: "#eee" },
          },
          label: {
            backgroundColor: "lightblue",
            paddingTop: "2px",
            paddingBottom: "1px",
          },
          message: {
            backgroundColor: "red",
            color: "white",
            paddingTop: "2px",
            paddingBottom: "1px",
          },
        },
        fields: {
          firstName: {
            selector: "#chargify5",
            label: "FIRST NAME",
            placeholder: "John",
            required: false,
            message: "First name is not valid. Please update it.",
            maxlength: "30",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
                placeholder: { color: "green" },
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          lastName: {
            selector: "#chargify6",
            label: "LAST NAME",
            placeholder: "Doe",
            required: false,
            message: "This field is not valid. Please update it.",
            maxlength: "30",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          number: {
            selector: "#chargify1",
            label: "Number",
            placeholder: "xxxx xxxx xxxx xxxx",
            message: "This field is not valid. Please update it.",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          month: {
            selector: "#chargify2",
            label: "Mon",
            placeholder: "mm",
            message: "This field is not valid. Please update it.",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          year: {
            selector: "#chargify3",
            label: "Year",
            placeholder: "yyyy",
            message: "This field is not valid. Please update it.",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          cvv: {
            selector: "#chargify4",
            label: "CVV code",
            placeholder: "123",
            required: false,
            message: "This field is not valid. Please update it.",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          address: {
            selector: "#chargify7",
            label: "Address",
            placeholder: "1234 Hill St",
            required: false,
            message: "This field is not valid. Please update it.",
            maxlength: "70",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          address2: {
            selector: "#chargify8",
            label: "Address 2",
            placeholder: "1234 Hill St",
            required: false,
            message: "This field is not valid. Please update it.",
            maxlength: "70",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          city: {
            selector: "#chargify9",
            label: "City",
            placeholder: "Austin",
            required: false,
            message: "This field is not valid. Please update it.",
            maxlength: "30",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          state: {
            selector: "#chargify10",
            label: "State",
            placeholder: "TX",
            required: false,
            message: "This field is not valid. Please update it.",
            maxlength: "2",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          zip: {
            selector: "#chargify11",
            label: "Zip Code",
            placeholder: "10001",
            required: false,
            message: "This field is not valid. Please update it.",
            maxlength: "5",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
          country: {
            selector: "#chargify12",
            label: "Country",
            placeholder: "US",
            required: false,
            message: "This field is not valid. Please update it.",
            maxlength: "30",
            style: {
              field: {
                backgroundColor: "#ffdfdf",
                padding: "3px",
                borderRadius: "5px",
              },
              input: {
                backgroundColor: "#fdfde1",
                paddingTop: "2px",
                paddingBottom: "1px",
              },
              label: {
                paddingTop: "2px",
                paddingBottom: "1px",
                fontSize: "11px",
              },
              message: { paddingTop: "2px", paddingBottom: "1px" },
            },
          },
        },
      });

      return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  useEffect(
    () => {
      chargify.current.load({type: 'card'});
      setToken('');

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        chargify.current.unload();
      };
    }, [chargify, 'card']);

  return (
    <>
      <Head>
        <script type="text/javascript" src="https://js.chargify.com/latest/chargify.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" />
      </Head>

      <div className="chargify-js-wrapper">
        <div className="chargify-js-content">
          <h1>Chargify</h1>

          <form className="chargify-form" id="chargify-form" onSubmit={handleSubmit} ref={chargifyForm}>
            <div className="cardfront">
              <div id="chargify1"></div>
            </div>

            <div className="cardback">
              <div id="chargify2"></div>
              <div id="chargify3"></div>
              <div id="chargify4"></div>
            </div>

            <div className="name">
              <div id="chargify5"></div>
              <div id="chargify6"></div>
            </div>

            <div className="address1">
              <div id="chargify7"></div>
            </div>

            <div className="address2">
              <div id="chargify8"></div>
            </div>

            <div className="address3">
              <div id="chargify9"></div>
              <div id="chargify10"></div>
            </div>

            <div className="address4">
              <div id="chargify11"></div>
              <div id="chargify12"></div>
            </div>

            <button type="submit" className="host-button">Submit Host Form</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChargifyForm;
