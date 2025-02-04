import {PropsWithChildren} from "react";
import {Filters} from "./Filters";
import {List} from "./List";
import {observer} from "mobx-react";
import {AddDocument} from "./AddDocument";

export const Documents = Object.assign(
	observer((props: PropsWithChildren) => (
		<>{props.children}</>
	)),
	{
		Filters,
		List,
		AddDocument
	},
);

