import { Box, Typography } from "@material-ui/core/";
import StarBorderIcon from "@material-ui/icons/StarBorder";

type SkillProps = {
  label: string;
  stars: number;
};

export const Skill = ({ label, stars }: SkillProps) => {
  const star = <StarBorderIcon color="primary" fontSize="small" />;
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h5" color="primary">
        {`${label}: `}
      </Typography>

      {new Array(stars).fill(star)}
    </Box>
  );
};
