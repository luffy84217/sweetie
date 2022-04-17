import { useAppDispatch } from "../../app/hooks";
import { nextStep, setSignUpSex } from "../../features/signup";
import Card from "../Card";
import FemaleIcon from "../icons/FemaleIcon";
import MaleIcon from "../icons/MaleIcon";

const ChooseRoleStep: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleRoleClick: (sex: number) => React.MouseEventHandler<HTMLLIElement> = (sex) => () => {
    dispatch(setSignUpSex(sex));
    dispatch(nextStep());
  };

  return (
    <>
      <section className="prose lg:prose-xl text-center">
        <h3>Choose your role</h3>
        <p>lorem ipsum dolor sit amet</p>
      </section>
      <ul className="flex flex-col sm:flex-row items-center gap-4 my-4">
        <li className="group w-72 cursor-pointer" onClick={handleRoleClick(1)}>
          <Card className="flex flex-col items-center h-96 border-8 border-transparent transition-colors hover:border-8 hover:border-blue-500">
            <MaleIcon className="group-hover:fill-blue-500" />
            <section className="prose w-full">
              <h3 className="text-center">male</h3>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </section>
          </Card>
        </li>
        <li className="group w-72 cursor-pointer" onClick={handleRoleClick(0)}>
          <Card className="flex flex-col items-center h-96 border-8 border-transparent transition-colors hover:border-8 hover:border-red-500">
            <FemaleIcon className="group-hover:fill-red-500" />
            <section className="prose w-full">
              <h3 className="text-center">female</h3>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </section>
          </Card>
        </li>
      </ul>
    </>
  );
};

export default ChooseRoleStep;
