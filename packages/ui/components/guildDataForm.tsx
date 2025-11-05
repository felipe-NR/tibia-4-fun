import { useActionState } from "react";

export const GuildDataForm = () => {

  const submitAction
   = async (
    previousState: string,
  ) => {
    try {
      const fetchGuildData = await fetch("https://wpp-daily-xp.onrender.com/generate-link");
      const data = await fetchGuildData.json();
            const {headers, tableData, replyMessage, apiWhatsappLink, time} = data;
      console.log("Fetched guild data:", data);
      return apiWhatsappLink;
    } catch (error) {
      console.error("Error fetching guild data:", error);
      return previousState;
    }

  }

  const [state, formAction, isPending] = useActionState(submitAction, "");
  return (
  <>
    <form action={formAction}>
      <button disabled={isPending || state !== ""} type="submit">{isPending ? "Gerando Link..." : state === "" ? "Gerar Link" : "Link Gerado"}</button>
    </form>
    {state === "" ? <></> : <a href={state} target="_blank"><span>{"Link do WhatsApp"} </span></a>}
  </>
  );
};
