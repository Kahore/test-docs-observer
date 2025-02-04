function sortBy(key: string, cb: (a?: number, b?: number) => number) {
	if (!cb) cb = () => 0;
	return (a?: number, b?: number) =>
		a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : cb(a, b);
}

function sortByDesc(key: string, cb: (a?: number, b?: number) => number) {
	if (!cb) cb = () => 0;
	return (b?: number, a?: number) =>
		a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : cb(b, a);
}

export function orderBy(keys: string[], orders: ('asc' | 'desc')[]) {
	let cb = () => 0;
	keys.reverse();
	orders.reverse();
	for (const [i, key] of keys.entries()) {
		const order = orders[i];

		if (order === 'asc') cb = sortBy(key, cb);
		else if (order === 'desc') cb = sortByDesc(key, cb);
	}
	return cb;
}
