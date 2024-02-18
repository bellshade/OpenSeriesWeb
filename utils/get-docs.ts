import { globSync } from "fast-glob";

export type DocumentGroup = {
    [key: string]: {
        title: string;
        link: string;
    }[];
};

type PrioritizedCategories = {
    [category: string]: string[];
};

export const getDocs = (prioritizedCategories: PrioritizedCategories) => {
    const documentPaths = getDocumentPaths();
    const documentGroup = groupDocumentsByCategory(documentPaths);
    const sortedDocuments = prioritizeAndSortDocuments(documentGroup, prioritizedCategories);
    return sortedDocuments;
};

const getDocumentPaths = () => globSync("app/docs/**/**/*.mdx");

const groupDocumentsByCategory = (documentPaths: string[]): DocumentGroup => {
    const documentGroup: DocumentGroup = {};
    documentPaths.forEach((path) => {
        const match = path.match(/app\/docs\/([\w-]+)\/([\w-]+)\/page\.mdx/);
        if (!match || match.length < 3) return;

        const [, category, title] = match;
        const formattedCategory = category.replace(/-/g, " ");
        const formattedTitle = title.replace(/-/g, " ");
        const link = `/docs/${category}/${title}`;

        const categoryKey = formattedCategory.toUpperCase();
        documentGroup[categoryKey] = [...(documentGroup[categoryKey] || []), { title: formattedTitle, link }];
    });
    return documentGroup;
};

const prioritizeAndSortDocuments = (
    documentGroup: DocumentGroup,
    prioritizedCategories: PrioritizedCategories
): DocumentGroup => {
    const sortedDocuments: DocumentGroup = {};

    Object.entries(prioritizedCategories).forEach(([category, links]) => {
        const categoryKey = category.toUpperCase();
        if (documentGroup[categoryKey]) {
            sortedDocuments[categoryKey] = documentGroup[categoryKey].sort((a, b) =>
                links.includes(a.title.toLowerCase()) ? -1 : links.includes(b.title.toLowerCase()) ? 1 : 0
            );
            delete documentGroup[categoryKey];
        }
    });

    Object.assign(sortedDocuments, documentGroup);

    return sortedDocuments;
};
