const links = () => import("./const/links.json").then((module)=> module.default);

export const getLinks = async () => links();