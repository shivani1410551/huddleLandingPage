import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Footer = () => {
  const FormSchema = Yup.object({
    email: Yup.string().email().required("Check your email please"),
  });
  const onSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  const formInitialValues = {
    email: "",
  };

  return (
    <footer>
      <div className="bg-image-top ">
        <img
          src={"./assets/images/bg-footer-top-mobile.svg"}
          alt="mobile-top-image"
          className="sm:hidden mx-auto px-0 bg-no-repeat xs:block"
        />

        <img
          src={"./assets/images/bg-footer-top-desktop.svg"}
          alt="desktop-top-image"
          className="xs:hidden sm:block  bg-no-repeat"
        />
      </div>
      <section className="footer  bg-VeryDarkCyan text-VeryPaleBlue mx-auto p-10 sm:gap-2  sm:flex sm:flex-row-reverse sm:items-center sm:justify-around">
        <div className="newsletter  xs:gap-y-4 sm:gap-y-6  xs:my-8  sm:my-8 xs:px-2 sm:px-2  py-4  ">
          <h4 className="font-bold uppercase font-primary sm:pb-2">
            Newsletter
          </h4>
          <p className="font-secondary xs:text-[0.85rem] sm:text-[0.875rem] text-gray-200 sm:w-[400px] sm:pb-2">
            To receive tips on ho wto grow your community, sign up to our
            newsletter. We'll never send you spam or pass on your email address.
          </p>
          <Formik
            initialValues={formInitialValues}
            validationSchema={FormSchema}
            onSubmit={onSubmit}
          >
            <Form action="#">
              <Field
                type="text"
                id="email"
                name="email"
                className="my-4 xs:w-full text-black sm:w-full rounded py-1 md:w-[400px]cursor-pointer   outline-none"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-500 xs:text-[8px] sm:text-[8px] md:text-[12px]"
              />{" "}
              <a
                type="submit"
                href="#"
                className="text-VeryPaleBlue bg-Pink py-2 px-6 rounded md:flex justify-end w-fit font-medium xs:ml-auto sm:auto inline-block hover:bg-pink-300"
              >
                Subscribe
              </a>
            </Form>
          </Formik>
        </div>
        <div>
          <div className="main-footer mt-[6rem] grid xs:gap-4 sm:gap-4 ">
            <img
              src={"./assets/images/logoCopy.svg"}
              alt="footer-logo"
              className="w-[8.75rem]"
            />
            <p className="font-secondary xs:text-[0.85rem] sm:text-[0.875rem] text-gray-200 sm:w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              voluptatum ab! Consectetur blanditiis itaque ea hic
            </p>
            <ul>
              <li>
                <a href="#" className="text-xs text-gray-300 font-secondary">
                  <img
                    src={"./assets/images/icon-phone.svg"}
                    alt="phone logo"
                    className="inline-block pr-4"
                  />
                  Phone: +1-543-123-4567
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-300 font-secondary">
                  <img
                    src={"./assets/images/icon-email.svg"}
                    alt="email logo"
                    className="inline-block pr-4"
                  />
                  example@company.com
                </a>
              </li>
            </ul>
            <div className="social-links flex xs:gap-4 sm:gap-4">
              <a href="#" className="text-[1.25rem] ">
                <i className="fa-brands fa-square-facebook hover:text-blue-400"></i>
              </a>
              <a href="#" className="text-[1.25rem]">
                <i className="fa-brands fa-square-instagram hover:text-blue-400"></i>
              </a>
              <a href="#" className="text-[1.25rem]">
                <i className="fa-brands fa-square-twitter hover:text-blue-400"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
