import { Screen, score, graphIni} from "../QuizPro.js";
export const loadLocalStorageAndPaintGraph = () => {

    const scores = JSON.parse(localStorage.getItem('results')) || [];
    const grafScore = scores.map(e => e.score)
    const grafDate = scores.map(e => e.date)

    if (scores.length === 0) {
        graphIni.style.display = "none"
    } else {
        var chart = new Chartist.Line('.ct-chart', {
            labels: grafDate,
            series: [
              grafScore
            ]
          }, {
            low: 0
          });
          
          var seq = 0,
            delays = 80,
            durations = 500;
          
          chart.on('created', function() {
            seq = 0;
          });
          
          chart.on('draw', function(data) {
            seq++;
          
            if(data.type === 'line') {
              data.element.animate({
                opacity: {
                  begin: seq * delays + 1000,
                  dur: durations,
                  from: 0,
                  to: 1
                }
              });
            } else if(data.type === 'label' && data.axis === 'x') {
              data.element.animate({
                y: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.y + 100,
                  to: data.y,
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'label' && data.axis === 'y') {
              data.element.animate({
                x: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 100,
                  to: data.x,
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'point') {
              data.element.animate({
                x1: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                x2: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
                }
              });
            } else if(data.type === 'grid') {
              var pos1Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '1'] - 30,
                to: data[data.axis.units.pos + '1'],
                easing: 'easeOutQuart'
              };
          
              var pos2Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '2'] - 100,
                to: data[data.axis.units.pos + '2'],
                easing: 'easeOutQuart'
              };
          
              var animations = {};
              animations[data.axis.units.pos + '1'] = pos1Animation;
              animations[data.axis.units.pos + '2'] = pos2Animation;
              animations['opacity'] = {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              };
          
              data.element.animate(animations);
            }
          });
          
          chart.on('created', function() {
            if(window.__exampleAnimateTimeout) {
              clearTimeout(window.__exampleAnimateTimeout);
              window.__exampleAnimateTimeout = null;
            }
            window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
          });      
    }
}

export const loadGraph = () => {
    let answers_inc = Screen - score
    var chart = new Chartist.Pie('.ct-chart2', {
        series: [score, answers_inc ],
        labels: [`Good: ${score}`, `Bad: ${answers_inc}`]
      }, {
        donut: true,
        showLabel: true,
        donutWidth: 80
      });
      
      chart.on('draw', function(data) {
        if(data.type === 'slice') {
          var pathLength = data.element._node.getTotalLength();
      
          data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });
      
          var animationDefinition = {
            'stroke-dashoffset': {
              id: 'anim' + data.index,
              dur: 1000,
              from: -pathLength + 'px',
              to:  '0px',
              easing: Chartist.Svg.Easing.easeOutQuint,
              fill: 'freeze'
            }
          };
      
          if(data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
          }
      
          data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
          });
      
          data.element.animate(animationDefinition, false);
        }
      });
      
      chart.on('created', function() {
        if(window.__anim21278907124) {
          clearTimeout(window.__anim21278907124);
          window.__anim21278907124 = null;
        }
        window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
      });
}