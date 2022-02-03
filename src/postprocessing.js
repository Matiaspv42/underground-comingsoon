/**
 * Pixelation shader
 */

const PostProcessing = {

	uniforms: {

		'tDiffuse': { value: null },
		'resolution': { value: null },
		'pixelSize': { value: 1 },
		'uTime': { value: 0 },
		'uStrengthRGBShift':{value:null},
		'uNoiseStrength': {value:null}

	},

	vertexShader: /* glsl */`

		
		varying highp vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

	fragmentShader: /* glsl */`
		uniform sampler2D tDiffuse;
		uniform float pixelSize;
		uniform vec2 resolution;
		uniform float uTime;
		uniform float uStrengthRGBShift;
		uniform float uNoiseStrength;

		varying highp vec2 vUv;
		float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }

		void main(){
			
			vec2 shift = vec2(0.01,0.01) * uStrengthRGBShift  ;
			// black and white
			vec4 t = texture2D(tDiffuse, vUv) ;
		
			vec3 color = vec3((t.r + t.b + t.g)/5.0);
			
			
			// rgb shift
			
			vec4 t1 = texture2D(tDiffuse, vUv + shift);
			vec4 t2 = texture2D(tDiffuse, vUv -shift);

			vec3 color1 = vec3((t1.r + t1.b + t1.g)/5.0);
			vec3 color2 = vec3((t2.r + t2.b + t2.g)/5.0);
			
			color = vec3(
				color2.r,
				color1.g,
				color.b) ;
			

			// noise
			
			float noise = hash(vUv + uTime)*uNoiseStrength;

		
			

			vec2 dxy = pixelSize / resolution;
			vec2 coord = dxy * floor( vUv / dxy );
			// gl_FragColor = texture2D(tDiffuse,vUv);
			gl_FragColor = vec4(color + vec3(noise),1.0 );

		}`

};

export { PostProcessing };