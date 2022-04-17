import ChooseRoleStep from "../components/SignUp/ChooseRoleStep";
import FillFormStep from "../components/SignUp/FillFormStep";
import type { SignUpConfig } from "../types/signup";

export const signupConfig: SignUpConfig = {
  email: {
    steps: [
      {
        id: '0',
        label: 'Choose role',
      },
      {
        id: '1',
        label: 'Fill form',
      },
      {
        id: '2',
        label: 'Complete',
      },
    ],
    components: [ChooseRoleStep, FillFormStep],
  },
  phone: {
    steps: [
      {
        id: '0',
        label: 'Choose role',
      },
      {
        id: '1',
        label: 'Fill form',
      },
    ],
    components: [ChooseRoleStep, FillFormStep],
  }
};
