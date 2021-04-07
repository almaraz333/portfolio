import Grid from "@material-ui/core/Grid";
import { Skill } from "./Skill";

export type Skill = {
  skill: string;
  stars: number;
};
export const Skills = () => {
  const skills: Skill[] = [
    { skill: "yeet", stars: 5 },
    { skill: "yeet", stars: 1 },
    { skill: "yeet", stars: 3 },
    { skill: "yeet", stars: 2 },
    { skill: "yeet", stars: 5 },
  ];
  return (
    <div>
      <h3>Some of my top skills:</h3>
      <br />
      <Grid container spacing={1}>
        {skills.map((skill) => (
          <Grid item xs={6}>
            <Skill label={skill.skill} stars={skill.stars} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
