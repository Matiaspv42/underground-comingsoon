uniform sampler2D uImage;
uniform float uTime;
uniform sampler2D uTreesTexture;
varying float vNoise;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vEyeVector;
varying vec3 vBaryCoords;


vec2 hash22(vec2 p)
{
	p = fract(p*vec2(5.3983, 5.4427));
    p += dot(p.yx, p.xy + vec2(21.5351, 14.3137));
    return fract(vec2(p.x * p.y * 95.4337, p.x*p.y*97.597));
}


void main(){

    float width = 1.1;
    vec3 d = fwidth(vBaryCoords);
    vec3 s = smoothstep(d*(width + 0.5),d*(width - 0.5),vBaryCoords);
    float line = max(s.x,max(s.y,s.z));
    if(line<0.5) discard;
    gl_FragColor = vec4(mix(vec3(1.0),vec3(0.0), 1.0 -vec3(line)), 1.0);
}