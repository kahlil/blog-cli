import test from 'ava';
import blogCli from '.';

test('title', t => {
	const err = t.throws(() => {
		blogCli(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(blogCli('unicorns'), 'unicorns & rainbows');
});
