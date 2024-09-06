import "./Loader.css";
import {FC} from "react";
type TypeLoaderProps = {
	classList: Array<string>
}

export const Loader: FC<TypeLoaderProps> = ({classList}) => {
	return(
		<div className={`loader ${classList?.join(' ')}`}>
			<div className="loader-item"></div>
			<div className="loader-item"></div>
			<div className="loader-item"></div>
		</div>
	)
};