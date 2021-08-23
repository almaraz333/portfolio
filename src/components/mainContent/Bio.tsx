import { animated, useTrail } from "react-spring";

export const Bio = () => {
  const items = [
    <p>
      Hey! I'm Colton Almaraz and I'm a software developer. I make digital
      spaces for everyone and everything.
      <br />
      <br />
    </p>,
    <p>
      I'm a mostly remote dev who creates minimal, effective products and
      sometimes has a hand in designing them. Whether it's mockups, prototypes,
      back-end, or front-end I have the skills required to create and experience
      the user will never forget. I focus on products from a human perspective
      as well as business.
    </p>,
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <div className="bio">
      {trail.map(({ ...style }, index) => (
        <animated.div style={style}>{items[index]}</animated.div>
      ))}
    </div>
  );
};
