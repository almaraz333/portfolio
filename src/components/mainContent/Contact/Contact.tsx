import { Button } from "@material-ui/core";

export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="sub-name pb-10 text-white text-center">Contact</h2>
      <p className="text-secondary opacity-80 text-center">
        Say hi!
        <br />
        <br />
        I'm currently happy where I am in life but am always open to discussion.
      </p>
      <Button
        variant="outlined"
        className="button px-5 contact-button"
        size="large"
        href="mailto:almarazcolton333@gmail.com?subject=I'm Interested in Talking to You"
      >
        <h1>Contact Me!</h1>
      </Button>
    </div>
  );
};
