# dynamics

#### A rigid-body dynamics simulation demo of [gamex][gamex].

_See this running at [levi.dev/dynamics][demo]!_

This application demonstrates many of the features of the [gamex][gamex] game engine, and notably
the underlying [physx][physx] physics engine.

## Notable Features

- Includes continuous [collision detection][collision-detection] with [impulse-based 
  resolution][collision-resolution].
- [Decouples the physics simulation and animation rendering time steps][stable-time-steps], and uses
  a fixed timestep for the physics loop. This provides numerical stability and precise
  reproducibility.
- Suppresses linear and angular momenta below a certain threshold.

The engine consists primarily of a collection of individual physics jobs and an update loop. Thi 
update loop is in turn controlled by the animation loop. However, whereas the animation loop renders
each job once per frame loop&mdash;regardless of how much time actually elapsed since the previous
frame&mdash;the physics loop updates its jobs at a constant rate. To reconcile these frame rates,
the physics loop runs as many times as is needed in order to catch up to the time of the current
animation frame. The physics frame rate should be much higher than the animation frame rate.

## Acknowledgements / Technology Stack

The technologies used in this application include:

- [ES2015][es2015]
- [WebGL][webgl]
- [gulp.js][gulp]
- [Babel][babel]
- [Browserify][browserify]
- [SASS][sass]
- [gamex][gamex]
- Numerous other packages that are available via [NPM][npm] (these are listed within the
  [`package.json`](./package.json) file)

The metal textures were obtained from [http://webtreats.mysitemyway.com/][webtreats] and
[premiumpixels.com][premiumpixels].

## Developing / Running the Code

See [Getting Set Up](./docs/getting-set-up) or [Understanding the
Code](./docs/understanding-the-code) for more info.

## License

MIT

[demo]: http://levi.dev/dynamics

[grafx]: https://github.com/levilindsey/grafx
[physx]: https://github.com/levilindsey/physx
[gamex]: https://github.com/levilindsey/gamex

[es2015]: http://www.ecma-international.org/ecma-262/6.0/
[webgl]: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
[node]: http://nodejs.org/
[babel]: https://babeljs.io/
[browserify]: http://browserify.org/
[gulp]: http://gulpjs.com/
[sass]: http://sass-lang.com/
[jasmine]: http://jasmine.github.io/
[karma]: https://karma-runner.github.io/1.0/index.html
[npm]: http://npmjs.org/

[webtreats]: http://webtreats.mysitemyway.com/8-tileable-metal-textures/
[premiumpixels]: http://www.premiumpixels.com/freebies/9-high-resolution-metal-surface-textures

[collision-detection]: https://en.wikipedia.org/wiki/Collision_detection
[collision-resolution]: https://en.wikipedia.org/wiki/Collision_response#Impulse-based_contact_model
[stable-time-steps]: https://gafferongames.com/post/fix_your_timestep/
