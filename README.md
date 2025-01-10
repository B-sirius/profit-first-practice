# Profit first

It's a project learning WatermelonDB following Youtuber [notJust.dev](https://www.youtube.com/watch?v=x7KE4JD-Q9A&t=10287s).

Built with:

- React Native (Expo router)
- WatermelonDB

## Thoughts about WatermelonDB

Pros

- Nice typing with schema and models.
- `withObservables` does can save some logic and make db changes feel reactive and smooth.

Cons

- The package maintance seems to be slow.
- Missing typings for `withObservables` feature.

Conclusion

I think WatermelonDB is useful for indie projects which needs to be developed fast and doesn't require a very long term maintance.

Writing with it is basically fast and feels confident thanks to it's nice wrapper over sqlite, but it requires you to following their certain practice, so it would be hard to switch to another solution in future days.

The community likes it but it seems to me the author doesn't put much effort on it now, while so many issues still open. So I won't use it in business project that requires the package to be stable and well maintained.
