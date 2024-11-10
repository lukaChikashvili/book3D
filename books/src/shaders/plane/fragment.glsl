uniform vec3 color1;
    uniform vec3 color2;
    void main() {
      gl_FragColor = vec4(mix(color1, color2, gl_FragCoord.x / 800.0), 1.0);
    }