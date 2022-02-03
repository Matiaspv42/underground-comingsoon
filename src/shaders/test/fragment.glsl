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


    // Take out interpolation of normals
    vec3 X = dFdx(vNormal);
    vec3 Y = dFdy(vNormal);
    vec3 normal = normalize(cross(X,Y));

    // fake light
    float diffuse = dot(normal, vec3(1.0));

    vec2 rand = hash22(vec2(floor(diffuse * 5.0)));


    float fresnel = pow(1.0 + dot(vEyeVector,normal),3.0);

    vec2 randomPerturbation =vec2(
        sign(rand.x -0.5) + (rand.x -0.5) *0.6,
        sign(rand.y -0.5) + (rand.y -0.5) *0.6); 

    vec2 newUV =randomPerturbation *  gl_FragCoord.xy/vec2(1000.0) ;

    // refraction

    vec3 refracted = refract(vEyeVector,normal, 1.0/3.0);
    newUV += 0.2*refracted.xy;

    vec4 treesView = texture2D(uTreesTexture,newUV);

    gl_FragColor = treesView * (1.0-fresnel) ;
    // gl_FragColor = vec4(diffuse);
    // gl_FragColor = vec4(vEyeVector,1.);
    // gl_FragColor = vec4(vec3(1.0 -fresnel),1.0);

}