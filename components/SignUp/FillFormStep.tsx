import DateSelectGroup from "../inputs/DateSelectGroup";
import Select from "../inputs/Select";
import TextArea from "../inputs/TextArea";
import TextField from "../inputs/TextField";

const FillFormStep: React.FC = () => {
  return (
    <>
      <section className="prose lg:prose-xl text-center">
        <h3>Fill the form</h3>
        <p>lorem ipsum dolor sit amet</p>
      </section>
      <fieldset className="flex flex-col w-full sm:w-1/2 items-center gap-4 my-4">
        <TextField label="Email Address" />
        <TextField type="password" label="Password" />
        <TextField type="password" label="Confirm Password" />
        <TextField label="Display Name" />
        <DateSelectGroup label="Date of Birth" />
        <TextArea label="Introduction" />
      </fieldset>
    </>
  );
};

export default FillFormStep;
