import Grid from "@material-ui/core/Grid";
import { Skill } from "./Skill";

export type SkillsProps = {
  skill: string;
  stars: number;
};

export const Skills = () => {
  const skills: SkillsProps[] = [
    { skill: "Typescript", stars: 4 },
    { skill: "React", stars: 5 },
    { skill: "Redux", stars: 5 },
    { skill: "Recoil", stars: 4 },
    { skill: "Sass/CSS", stars: 5 },
    { skill: "Apollo", stars: 3 },
    { skill: "GraphQL", stars: 4 },
    { skill: "SQL", stars: 3 },
  ];
  return (
    <div className="skills-container">
      <h3 style={{ fontSize: "1.5rem" }}>Some of my top skills:</h3>
      <br />
      <Grid className="skills" container spacing={1}>
        {skills.map((skill) => (
          <Grid item className="skill" xs={6}>
            <Skill label={skill.skill} stars={skill.stars} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
