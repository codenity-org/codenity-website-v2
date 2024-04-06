import { Container } from "../Container";

export const Footer = () => {
  return (
    <footer className="pt-32 pb-10 bg-[#002347] mt-10">
      <Container>
        <div className="flex flex-col items-center">
          <p className="m-0 text-white">
            Copyright &copy;
            <script></script>
            All rights reserved
          </p>
          <div>
            <a href="https://www.facebook.com/codenity19">
              <i className="ti-facebook"></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
