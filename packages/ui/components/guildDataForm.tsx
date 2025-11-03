import { useActionState } from "react";

export const GuildDataForm = () => {

  const increment = async (
    previousState: number,
  ) => {
    return previousState + 1;
  }

  const [state, formAction] = useActionState(increment, 0);
  return (
    <form action={formAction}>
      {state}
      <button type="submit">Increment</button>
    </form>
  );
};
