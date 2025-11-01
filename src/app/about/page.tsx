import AppAlert from "@/app/components/AppAlert";
import { Alert } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function AboutPage() {
  return (
    <main>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
      <p>About Page</p>
    </main>
  );
}
