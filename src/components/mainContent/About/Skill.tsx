import { Box } from "@material-ui/core/";
import { StarBorderOutlined } from "@material-ui/icons";

type SkillProps = {
  label: string;
  stars: number;
};

export const Skill = ({ label, stars }: SkillProps) => {
  const star = <StarBorderOutlined color="primary" fontSize="small" />;
  return (
    <Box display="flex" alignItems="center" className="py-3 text-lg">
      <h4
        style={{
          opacity: ".8",
          color: "#ffffff",
          fontWeight: "bold",
          marginRight: ".333rem",
        }}
      >
        {`${label}: `}
      </h4>

      {new Array(stars).fill(star)}
    </Box>
  );
};
