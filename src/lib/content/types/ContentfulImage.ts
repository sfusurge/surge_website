export type Image = {
    metadata: {
        tags: string[];
        concepts: string[];
    };
    sys: {
        space: {
            sys: Record<string, any>;
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
            sys: Record<string, any>;
        };
        publishedVersion: number;
        revision: number;
        locale: string;
    };
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            details: Record<string, any>;
            fileName: string;
            contentType: string;
        };
    };
};