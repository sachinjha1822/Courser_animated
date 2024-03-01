const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    console.log({ clientX, clientY });

    //0 - 1
    const { innerWidth, innerHeight } = window;
    const fractionX = clientX / innerWidth; //0 - 1
    const fractionY = clientY / innerHeight; //0 - 1

    console.log({ fractionX, fractionY  });

    const pupilX = -70 + fractionX * 140;
    const pupilY = -70 + fractionY * 140;

    console.log({ pupilX, pupilY });

    document.querySelectorAll('.pupil')
    .forEach(el => {
        el.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    })

}

window.addEventListener('mousemove', handleMouseMove);