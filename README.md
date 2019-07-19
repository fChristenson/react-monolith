# React monolith

## What we will cover

* One of the biggest problems with enterprise monoliths
* How to mitigate that problem

## Notes

Something that a lot of projects face is that as the size of the code base grows
their bundling process takes longer and by extension the time it takes to develop
a given feature and ship that feature increases.

On the backend a popular concept to deal with this sort of thing is called MicroServices
where the idea is to split up a large code base in to multiple smaller projects
that can be managed independently.

Frontend has started to see hints of the same ideas and today I will show you a simple way
to keep your monolith application and without any magic tools be able to split your code
to gain the benefits of a single bundle file when you ship but with the ability to keep
your development speed when you work.
