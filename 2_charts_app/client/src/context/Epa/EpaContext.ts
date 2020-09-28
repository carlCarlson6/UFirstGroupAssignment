import React from "react";
import { IEpaContext } from "../../models/IEpaContext";

const EpaContext = React.createContext<IEpaContext>({} as IEpaContext);

export default EpaContext;