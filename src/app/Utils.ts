export function toUpperCase(args: string) {
	return args.toUpperCase();
}

export type stringInfo = {
	lowercase: string;
	uppercase: string;
	characters: string[];
	length: number;
	extraInfo: Object | undefined;
};

export function getStringInfo(args: string): stringInfo {
	return {
		lowercase: args.toLowerCase(),
		uppercase: args.toUpperCase(),
		characters: Array.from(args),
		length: args.length,
		extraInfo: {},
	};
}
