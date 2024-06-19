import numpy as np
import matplotlib.pyplot as plt

def find_segment_bounds(x, y):
    slopes = np.diff(y) / np.diff(x)
    segment_bounds = [x[i+1] for i in range(len(slopes)-1) if np.sign(slopes[i]) != np.sign(slopes[i+1])]
    return segment_bounds

def display_calcs(label, bad, good):
    values = dict()
    count = 0
    total = 0
    
    for a in range(0, good+1):
        for b in range(bad, 1):
            val = a + b
            count += 1
            total += val
            if val in values:
                values[val] += 1
            else:
                values[val] = 1
    
    x = list(values.keys())
    y = list(values.values())
    avg = total / count
    total_values = sum(y)
    y_percent = [(value / total_values) * 100 for value in y]

    segment_bounds = find_segment_bounds(x, y_percent)

    fig, ax = plt.subplots(1, 2, figsize=(14, 7))

    ax[0].bar(x, y_percent, color='lightgrey')
    
    ax[0].set_xlabel('Roll')
    ax[0].set_ylabel('% Chance')
    ax[0].set_title(f'{label} - Avg: {avg:.2f} - Count: {total_values}')
    
    cumulative_sums = []
    cumulative_sum = 0
    for value in reversed(y_percent):
        cumulative_sum += value
        cumulative_sums.append(cumulative_sum)
    cumulative_sums.reverse()

    ax[1].bar(x, cumulative_sums, color='lightgrey')
    ax[1].set_xlabel('Roll')
    ax[1].set_ylabel('Cumulative sum of % Chance')
    ax[1].set_title('Cumulative Values')
    
    # Fit and plot piecewise functions for cumulative sums
    piecewise_functions = []
    colors = ['red', 'green', 'blue']
    num_segments = len(segment_bounds) + 1

    for i in range(num_segments):
        if i == 0:
            lower_bound = x[0]
        else:
            lower_bound = segment_bounds[i-1]
        if i == num_segments - 1:
            upper_bound = x[-1]
        else:
            upper_bound = segment_bounds[i]
        
        segment_x = x[x.index(lower_bound):x.index(upper_bound)+1]
        segment_y = cumulative_sums[x.index(lower_bound):x.index(upper_bound)+1]
        
        if len(segment_x) > 1:
            if num_segments == 1:
                # Linear fit
                b, c = np.polyfit(segment_x, segment_y, deg=1)
                a = 0  # For linear, set 'a' to 0
                equation_text = f'y = {b:.4f}x + {c:.4f}  [{lower_bound} ≤ x ≤ {upper_bound}]'
            elif num_segments == 2:
                # Quadratic fit
                a, b, c = np.polyfit(segment_x, segment_y, deg=2)
                equation_text = f'y = {a:.4f}x^2 + {b:.4f}x + {c:.4f}  [{lower_bound} ≤ x ≤ {upper_bound}]'
            elif num_segments == 3:
                if i == 1:
                    # Linear fit for the middle segment
                    b, c = np.polyfit(segment_x, segment_y, deg=1)
                    a = 0  # For linear, set 'a' to 0
                    equation_text = f'y = {b:.4f}x + {c:.4f}  [{lower_bound} ≤ x ≤ {upper_bound}]'
                else:
                    # Quadratic fit for the first and last segments
                    a, b, c = np.polyfit(segment_x, segment_y, deg=2)
                    equation_text = f'y = {a:.4f}x^2 + {b:.4f}x + {c:.4f}  [{lower_bound} ≤ x ≤ {upper_bound}]'

            poly = np.poly1d([a, b, c])
            x_curve = np.linspace(lower_bound, upper_bound, 100)
            y_curve = poly(x_curve)

            ax[1].plot(x_curve, y_curve, color=colors[i], linestyle='--')
            
            # Annotate the piecewise function equations
            ax[1].text(np.mean(segment_x), np.mean(segment_y), equation_text, color=colors[i], fontsize=8, ha='center')

            # Plot vertical lines for segment bounds
            ax[1].axvline(x=lower_bound, color=colors[i], linestyle=':', linewidth=1)
            ax[1].axvline(x=upper_bound, color=colors[i], linestyle=':', linewidth=1)
            
            # Store piecewise function details
            piecewise_functions.append({
                'a': round(a, 4),
                'b': round(b, 4),
                'c': round(c, 4),
                'lower': lower_bound,
                'upper': upper_bound
            })

    plt.tight_layout()

    return piecewise_functions, plt

data = [
    ("Normal D2D", 0, 9),
    ("Nell D2D", 0, 19),
    ("Nell COP", 0, 59),
    ("Nell SCOP", 0, 99),
    ("Rachel COP", 0, 39),
    ("Flak D2D", -9, 24),
    ("Flak COP", -19, 49),
    ("Flak SCOP", -39, 89),
    ("Jugger D2D", -14, 29),
    ("Jugger COP", -24, 54),
    ("Jugger SCOP", -44, 94),
    ("Sonja D2D", -9, 9)
]

data_with_functions = []
plots = []

for label, bad, good in data:
    functions, plt = display_calcs(label, bad, good)
    plots.append(plt)
    type_ = label.split()[1]
    name = label.split()[0]
    data_with_functions.append({'name': name, 'type': type_, 'functions': functions})

print("Piecewise Functions:")
for entry in data_with_functions:
    print(entry)

choice = input('Display Charts? >')
if choice.upper() == 'Y' or choice.upper() == 'YES':
    for plt in plots:
        plt.show()











