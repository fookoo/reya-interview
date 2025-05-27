import loadingImage from "../../assets/loading.png";
import { LoaderStyled } from "./style.ts";

export const Loader = (props: { style: React.CSSProperties }) => (
  <LoaderStyled src={loadingImage} alt="loading" {...props} />
);
