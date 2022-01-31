uniform sampler2D uImage;
uniform float uTime;

varying float vNoise;
varying vec2 vUv;

void main(){
    // vec3 color1 = vec3(1.0,0.0,0.0);
    // vec3 color2 = vec3(0.0,0.0,1.0);
    // vec3 finalColor = mix(color1,color2,0.5*(vNoise +1.0));

    // vec2 newUV = vUv;

    // newUV = vec2(newUV.x,newUV.y + 0.01*sin(newUV.x*10.0 + uTime));

    // vec4 oceanView = texture2D(uOceanTexture, newUV);

    // gl_FragColor = vec4(vUv,0.0,1.0);

    // gl_FragColor = oceanView + 0.5*vec4(vNoise) ;´

    vec2 newUV = vUv;

    vec4 oceanView = texture2D(uImage,newUV);
    gl_FragColor = vec4(vUv,0.0,1.0);

    // gl_FragColor= vec4(vNoise,0.0,0.0,1.0);

    gl_FragColor = oceanView;
}